def primeSum(num):
    primes = [True] * (num + 1)
    primes[0] = primes[1] = False
    sum = 0
    for i in range(2, num + 1):
        if primes[i]:
            sum += i
            for j in range(i * i, num + 1, i):
                primes[j] = False
    return sum

if __name__ == '__main__':
    num = int(input("Enter the value of num: "))
    print(primeSum(num))