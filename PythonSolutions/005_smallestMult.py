import math

def isPrime(num):
    if num <= 1 : return False
    if num == 2 or num == 3: return True
    if num % 2 == 0 or num % 3 == 0: return False
    for i in range(3, round(math.sqrt(num)) + 1, 2):
        if num % i == 0: return False
    return True

def smallestMult(num):
    smallest = 1
    for i in range(2, num + 1):
        if isPrime(i):
            factor = i
            while factor * i <= num: factor = factor * i
            smallest = smallest * factor
    return smallest