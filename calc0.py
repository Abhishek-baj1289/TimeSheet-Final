from datetime import datetime
    # string_start= input("Enter start time: ")
    # string_end=input("Enter end time: ")
def calculateRNTOT(string_start,string_end)->tuple[float,float]: #return Value would be of the format (Regular OT hour,night time OT hour)
    start_time = datetime.strptime(string_start, "%H:%M:%S")
    end_time = datetime.strptime(string_end, "%H:%M:%S")
    EOD=datetime.strptime("12:00:00","%H:%M:%S")
    delta = end_time - start_time
    sec = delta.total_seconds()
    min = sec / 60
    hours = sec / (60 * 60)    
    temp=round(hours,2)
    if temp>0:
        return('Total OT in hours:', temp)
    else:
        temp+=24
        # return('Total OT in hours:', temp)
    if start_time<datetime.strptime("22:00:00","%H:%M:%S"):
        start_time2 = datetime.strptime(string_start, "%H:%M:%S")
        end_time2 = datetime.strptime("22:00:00", "%H:%M:%S")
        delta2 =  end_time2 -start_time2
        sec2 = delta2.total_seconds()
        hours2 = sec2 / (60 * 60)
        x=round(hours2,2)
        # return (x)
        # return('The regular OT hour is: ', x)
        return ('Night OT hour is: ', temp-x)
    else:
        # return (temp)
        return("Night Time OT is: ", temp)
        
        
if __name__=="__main__":
    print(calculateRNTOT("21:30:00","03:20:00"))