import json
import os
from algoliasearch.search_client import SearchClient


def read_local_index(file_location):
    return {item["objectID"]: item for item in json.load(open(file_location, "r"))}

def read_index(index):
    res = index.browse_objects({"query": "", "attributesToRetrieve": ["*"]})
    res = {item["objectID"]: item for item in res}
    return res

def count_index(index):
    res = index.search('')
    return res["nbHits"]

def free_space(index, posts, delete_n):
    hits = sorted(posts.values(), key=lambda hit: hit["created_at"])
    oldest_n = [hit["objectID"] for hit in hits[:delete_n]]
    res = index.delete_objects(oldest_n)


client = SearchClient.create(os.getenv("ALGOLIA_APP_ID"), os.getenv("ALGOLIA_ADMIN_KEY"))


local_articles = read_local_index("public/algolia.json")
remote_articles = read_index(client.init_index("support.mysurvey.solutions"))

posts_index = client.init_index("discourse-posts")
posts = read_index(posts_index)

total_objects = 0
total_objects += count_index(client.init_index("discourse-tags"))
total_objects += count_index(client.init_index("discourse-users"))
total_objects += len(list(remote_articles))
total_objects += len(list(posts))

local_ids = set(local_articles.keys())
remote_ids = set(remote_articles.keys())

intersection = local_ids.intersection(remote_ids)
to_be_ignored = [id for id in intersection if local_articles[id] == remote_articles[id]]
to_be_updated = intersection.difference(to_be_ignored)
to_be_added = local_ids.difference(remote_ids)
to_be_deleted = remote_ids.difference(local_ids)

print(f"Remote articles {len(remote_ids)}")
print(f"Local articles {len(local_ids)}")
print(f"Articles to be added {len(to_be_added)}")
print(f"Articles to be deleted {len(to_be_deleted)}")
print(f"Articles to be updated {len(to_be_updated)}")
print(f"Unchanged articles {len(to_be_ignored)}")

print(f"Current quota usage {total_objects}")

quota = 10000
reserve_n = 300 # we want to have reserve
posts_to_delete = total_objects - quota + reserve_n + len(to_be_added) - len(to_be_deleted)
if posts_to_delete > 0:
    print(f"Deleteing {posts_to_delete} posts")
    free_space(posts_index, posts, posts_to_delete)

batch_operations = [{
        "action": "deleteObject",
        "indexName": "support.mysurvey.solutions",
        "body": {"objectID": id}
    } for id in to_be_deleted]

# delete objects first so that we don run over the quota
client.multiple_batch(batch_operations)


batch_operations = [{
        "action": "addObject",
        "indexName": "support.mysurvey.solutions",
        "body": local_articles[id]
    } for id in to_be_added]
for id in to_be_updated:
    batch_operations.append({
        "action": "updateObject",
        "indexName": "support.mysurvey.solutions",
        "body": local_articles[id]
    })

client.multiple_batch(batch_operations)
