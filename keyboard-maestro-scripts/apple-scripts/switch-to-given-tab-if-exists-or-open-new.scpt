tell application "Google Chrome" to set windowTabList to URL of tabs of every window

set targetURL to "TBD"

tell application "Keyboard Maestro Engine"
  set targetURL to getvariable "tabToGoTo"
end tell

set found to false
set windowIndex to 1
repeat with thisWindowsTabs in windowTabList
  set TabIndex to 1
  repeat with TabURL in thisWindowsTabs
    if (TabURL as text) contains targetURL then
      tell application "Google Chrome"
        set index of window windowIndex to 1
        set active tab index of window 1 to TabIndex
      end tell
      set found to true
      exit repeat
    end if
  set TabIndex to TabIndex + 1
  end repeat
  if found then exit repeat
  set windowIndex to windowIndex + 1
end repeat
tell application "System Events" to tell process "Google Chrome"
  set frontmost to true
end tell
if not found then
  tell application "Google Chrome" to make new tab at window 1 with properties {URL:targetURL}
end if
