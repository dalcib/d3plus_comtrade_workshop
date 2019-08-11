@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\dalz.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\dalz.js" %*
)