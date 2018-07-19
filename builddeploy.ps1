

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
& $msdeploy $arguments 2>$1