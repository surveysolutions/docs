# --- STEP 1: rebuild the content by executing HUGO tool on the clean output directory.
& $env:hugoexe --cleanDestinationDir --gc


# --- STEP 2: refresh the search index managed by the ALGOLIA tool.
if (-not $env:ALGOLIA_ADMIN_KEY) {
	Write-Error "algolia admin key is required"
}
$env:ALGOLIA_APP_ID = "5IDMO489J3"
$env:ALGOLIA_INDEX_NAME = "support.mysurvey.solutions"
$env:ALGOLIA_INDEX_FILE = "public/algolia.json"

& npm install
& npm run algolia

$content = (Get-Item public).FullName

Remove-Item (Join-Path $content "algolia.json") -ErrorAction "Continue"
Remove-Item (Join-Path $content "hidden") -Recurse

# --- STEP 3: deploy the site to the production with the MSDEPLOY tool.

$site = "support"
$loc = "capimswebp09"

$arguments = @(
	"-verb:sync",
	"-source:contentPath=`"$content`"",
	"-dest:contentPath=`"$site/`",wmsvc=$loc,authType='NTLM'",
	"-allowUntrusted"
)

function GetMSWebDeployInstallPath() {
	$path = (get-childitem "HKLM:\SOFTWARE\Microsoft\IIS Extensions\MSDeploy" | Select-Object -last 1).GetValue("InstallPath")
	$path = "${path}msdeploy.exe"

	if (!(Test-Path "$path")) {
		throw "MSDEPLOY.EXE is not installed."
	}

	return $path
}

& (GetMSWebDeployInstallPath) $arguments 2>$1