def pythagoreTriplet(num):
    for a in range(1, num // 3 + 1):
        for b in range(a + 1, (num - a) // 2 + 1):
            c = num - a - b
            if a**2 + b**2 == c**2:
                return a * b * c
    return -1

if __name__ == '__main__':
    num = int(input("Enter the value of num: "))
    print(pythagoreTriplet(num))