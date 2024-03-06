def isPrime(n):
    if n < 2:
        return False
    for i in range(2, int(n**0.5)+1):
        if n % i == 0:
            return False
    return True

def nthPrime(n):
    count = 0
    num = 1
    while count < n:
        num += 1
        if isPrime(num):
            count += 1
    return num

if __name__ == '__main__':
    n = int(input("Enter the value of n: "))
    print(nthPrime(n))