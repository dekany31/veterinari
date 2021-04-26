@echo off
cls

echo "===================================="
echo "====================================">> Autocommit.log

rem set autocommit  [ interval ] in seconds  - 1 minute 60, 20 min 1200 1 hour 3600
SET /A "interval = 1200"

rem set commit counter index 
SET /A "index = 1"
set /a num=2
SET /a mod=num %% 2

:ujra
rem always true - infinite loop.  to stop press CTRL+C
IF %mod% == 0 (
    echo "in auto commit. to STOP  press CTRL+C. waiting %interval% seconds."
    echo  "No: %index% commit. this is a 20mins auto commit. %date% - %time%" >> Autocommit.log

    rem wait/sleep  for the next commit
    sleep %interval%

    rem "commiting..."
    git status
    git add .
    git commit -m "No: %index% commit. this is a %interval% seconds auto commit. %date% - %time%"
    git push

    rem increment counter
    SET /A "index = index + 1"
   GOTO :ujra
)


pause "auto commit end...."