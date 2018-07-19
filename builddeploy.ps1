& $env:hugoexe

$content = (Get-Item public).FullName

Remove-Item (Join-Path $content "algolia.json")
Remove-Item (Join-Path $content "hidden") -Recurse

$site = "support"
$loc = "capimswebp01"

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