

& $env:hugoexe

$content = (Get-Item content).FullName
$site = "support"
$loc = "support-new2.mysurvey.solutions"

$arguments = @(
	"-verb:sync",
	"-source:contentPath=`"$content`"",
	"-dest:contentPath=`"$site`",wmsvc=$loc,authType='NTLM'",
	"-enableRule:DoNotDeleteRule",
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