def isPalindrome(str):
    l = len(str)
    for i in range(0, l):
        if str[i] != str[l - 1 - i]:
            return False
    return True


def largestPalindromeProduct(digit):
    maxi = 0
    mini = 0.1
    for i in range(0, digit):
        mini = int(10 * mini)
        maxi = maxi + (9 * mini)
    num = maxi * maxi
    while num >= mini * mini:
        if isPalindrome(str(num)):
            for i in range(maxi, mini - 1, -1):
                if num % i == 0 and (num / i) <= maxi:
                    return num
        num = num - 1


print(largestPalindromeProduct(3))
