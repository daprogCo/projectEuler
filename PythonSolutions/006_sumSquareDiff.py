def sumSquareDiff(n):
    return sum(range(1, n+1))**2 - sum([x**2 for x in range(1, n+1)])

def sumSquareDiff2(n):
    return (n*(n+1)//2)**2 - n*(n+1)*(2*n+1)//6

if __name__ == '__main__':
    n = int(input())
    print(sumSquareDiff2(n))