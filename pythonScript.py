import datetime
from pyscript import js #make sure you run pip install pyscript
import random
class App: 
    # function to get the current dateand time 
    def getCurrentDateAndTime(self):
        now = datetime.datetime.now() 
        return f"Date: {now.date()}\nTime: {str(now.time())[:8]}"
    def getRandomNumGenerator(self):
        randNum = random.randint(1,50)
        return f'{randNum}'
    def getRandomRangeValue(self,lowerBound, upperBound):
        try:
            randNum = random.randint(lowerBound,upperBound)
            return f'{randNum}'
        except:
            return "Invalid range"
    def basicCalc(self, operand1, operand2,operator):
        if operator =="+":
            answer = operand1+operand2
            return f'{answer}'
        elif operator =="-":
            answer = operand1-operand2
            return f'{answer}'
        elif operator =="*":
            answer = operand1*operand2
            return f'{answer}'
        elif operator =="/":
            answer = operand1/operand2
            return f'{answer}'
    def evaluateResult(self,calcString):
        try:
            answer = eval(calcString)
            return f'{answer}'
        except:
            return "Error in expression!"
js.app = App()