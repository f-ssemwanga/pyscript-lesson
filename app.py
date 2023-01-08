import datetime
import js

class App:
    # function to get the current date and time
    def getCurrentDateAndTime(self):
        now = datetime.datetime.now()
        return f"Date: {now.date()}\nTime: {str(now.time())[:8]}"

js.app = App()