set moneyLeft to "TBD"

tell application "Keyboard Maestro Engine"
  set moneyLeft to getvariable "Nuværende madkonto værdi"
end tell

set {year:y, month:m, day:d} to (current date)
set leap to (y mod 4 = 0 and y mod 100 ≠ 0 or y mod 400 = 0) as integer
set daysInMonth to {31, 28 + leap, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}
set daysInCurrentMonth to item m of daysInMonth

set daysLeftIncludingThisOne to daysInCurrentMonth - d + 1

--set daysLeftIncludingThisOne = daysInMonth[
round moneyLeft / daysLeftIncludingThisOne rounding down
