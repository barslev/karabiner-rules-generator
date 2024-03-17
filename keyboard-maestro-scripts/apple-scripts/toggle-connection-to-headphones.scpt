# Taken from https://www.reddit.com/r/MacOS/comments/i4czgu/big_sur_airpods_script/gck3gz3/
# by https://github.com/smithumble

use framework "IOBluetooth"
use scripting additions

set AirPodsName to "Benjamin Barslevs Buds2 Pro"

on getFirstMatchingDevice(deviceName)
  repeat with device in (current application's IOBluetoothDevice's pairedDevices() as list)
    if (device's nameOrAddress as string) contains deviceName then return device
  end repeat
end getFirstMatchingDevice

on toggleDevice(device)
  if not (device's isConnected as boolean) then
    device's openConnection()
    delay 0.1
    display notification "Connecting " & (device's nameOrAddress) with title "Keyboard Maestro automations"
    return "Connecting " & (device's nameOrAddress as string)
  else
    device's closeConnection()
    delay 0.1
    display notification "Disconnecting " & (device's nameOrAddress) with title "Keyboard Maestro automations"
    return "Disconnecting " & (device's nameOrAddress as string)
  end if
end toggleDevice

return toggleDevice(getFirstMatchingDevice(AirPodsName))
