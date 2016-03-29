import webbrowser
import time

totalBreaks = 3
breakCount = 0

while(breakCount < totalBreaks):
    time.sleep(3)
    webbrowser.open("https://www.youtube.com")
    breakCount = breakCount + 1
