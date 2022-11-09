from datetime import datetime
def calculateNTOT(string_start,string_end)->tuple[float,float]: #return Value would be of the format (Regular OT hour,night time OT hour)
    start_time = datetime.strptime(string_start, "%H:%M:%S")
    end_time = datetime.strptime(string_end, "%H:%M:%S")
    EOD=datetime.strptime("12:00:00","%H:%M:%S")
    if start_time >=(datetime.strptime("22:00:00","%H:%M:%S") or start_time<=datetime.strptime("05:00:00","%H:%M:%S")):
        delta = end_time - start_time
        sec = delta.total_seconds()
        min = sec / 60
        hours = sec / (60 * 60)    
        temp=round(hours,2)
        temp+=24
        if end_time>datetime.strptime("05:00:00","%H:%M:%S"):
            x=end_time-datetime.strptime("05:00:00","%H:%M:%S")
            secx=x.total_seconds()
            hourx=secx/(60*60)
            tempx=round(hourx,2)
            return temp-hourx,hourx
        else:
            return temp
    else:
        return 0
    
# print(calculateNTOT("22:30:00","08:00:00"))