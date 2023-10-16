def largestPrimeFactor(num):
    i = 2
    while i * i <= num:
        while num % i == 0 and num != i:
            num = int(num / i)
        i = i + 1
    return num


print(largestPrimeFactor(600851475143))
