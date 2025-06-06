def check_number(num):
    if num > 0:
        return "დადებითია"
    elif num < 0:
        return "უარყოფითია"
    else:
        return "ნულია"
    
print("")
print(check_number(5))    
print(check_number(-3)) 
print(check_number(0))      
print("")