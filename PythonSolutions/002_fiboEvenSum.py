def fiboEvenSum(num):
    test = 0
    evenSum = 2
    seqFibonacci = [1, 2]
    i = 1
    while test <= num:
        test = seqFibonacci[i - 1] + seqFibonacci[i]
        if test <= num:
            seqFibonacci.append(test)
            if test % 2 == 0:
                evenSum = evenSum + test
        i = i + 1
    return evenSum


print(fiboEvenSum(60))
