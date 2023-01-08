import datetime
from random import randint
import js

class App:
    # function to get the current date and time
    def getCurrentDateAndTime(self):
        now = datetime.datetime.now()
        return f"Date: {now.date()}\nTime: {str(now.time())[:8]}"

    def getRandomNumber(self):
        return randint(1, 100)

    def getRandomNumberInRange(self, minVal, maxVal):
        minVal = int(minVal)
        maxVal = int(maxVal)
        if minVal <= maxVal:
            return randint(minVal, maxVal)
        return "Range Error"

js.app = App()