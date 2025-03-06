# My answer
def multiplesOf3and5(num):
    sum = 0
    for i in range(3, num):
        if i % 3 == 0 or i % 5 == 0:
            sum = sum + i
    return sum

# Solution
def solution(n: int = 1000) -> int:
    return sum(e for e in range(3, n) if e % 3 == 0 or e % 5 == 0)

if __name__ == '__main__':
    num = 1000
    print(multiplesOf3and5(num))
    print(solution())
 