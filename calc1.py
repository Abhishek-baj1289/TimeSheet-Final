from datetime import datetime
def calculateOT(string_start,string_end)->tuple[float,float]:
    start_time = datetime.strptime(string_start, "%H:%M:%S")
    end_time = datetime.strptime(string_end, "%H:%M:%S")
    EOD=datetime.strptime("12:00:00","%H:%M:%S")
    delta = end_time - start_time
    sec = delta.total_seconds()
    min = sec / 60
    hours = sec / (60 * 60)   
    return round(hours,2)
        
