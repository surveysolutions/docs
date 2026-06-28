from diagrams import Cluster, Diagram, Edge
from diagrams.custom import Custom
from diagrams.onprem.compute import Server
from diagrams.onprem.database import PostgreSQL
from diagrams.onprem.client import Users
from diagrams.onprem.network import Traefik

from diagrams.onprem.network import Nginx

graph_attr = {
    "bgcolor": "transparent",
    "pad": "1"
}

clster_attr = {
    "pad": "1"
}

with Diagram("HQ Farm", show=False, graph_attr=graph_attr):
    users = Users("users")
    lb = Nginx("load balancer")

    with Cluster("Farm", direction="LR", graph_attr=clster_attr):
        backend = [Server("HQ 1"), Server("HQ 2")]

    db = PostgreSQL("database")
    users >> lb >> backend >> db
