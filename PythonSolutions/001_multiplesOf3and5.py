def multiplesOf3and5(num):
    sum = 0
    for i in range(1, num + 1):
        if i % 3 == 0 or i % 5 == 0:
            sum = sum + i
    return sum
