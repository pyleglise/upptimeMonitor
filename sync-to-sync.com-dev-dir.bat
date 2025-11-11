@echo off
setlocal

:: --- Récupère le dossier courant ---
set "SRC=%cd%"

:: --- Extrait le nom du dossier courant ---
for %%I in ("%SRC%") do set "FOLDERNAME=%%~nI"

:: --- Définit le dossier de destination (à adapter à ton environnement) ---
set "DEST=C:\Users\Pierre-Yves\Sync\Emploi\axialdata\Dev\%FOLDERNAME%"

:: --- Crée le dossier de destination s’il n’existe pas ---
if not exist "%DEST%" mkdir "%DEST%"

echo.
echo ===========================================
echo  Sauvegarde du projet : %FOLDERNAME%
echo  Source : %SRC%
echo  Destination : %DEST%
echo ===========================================
echo.

:: --- Lance Robocopy ---
robocopy "%SRC%" "%DEST%" /MIR /XD node_modules /NFL /NP /NS /NC

echo.
echo ✅ Sauvegarde terminée !
echo (Appuie sur une touche pour fermer)
pause >nul

endlocal
