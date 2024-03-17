set moneyLeft to "TBD"

tell application "Keyboard Maestro Engine"
  set moneyLeft to getvariable "Nuværende madkonto værdi"
end tell

set budgetUntilNow to (day of (current date) * 175)
set moneySpent to 5500 - moneyLeft
budgetUntilNow - moneySpent
