import time

n = int(input("введите число"))

arr = []
def primeNum (n): 
    count = 0
    i = 2
    while (count < n): 
        bul = False
        for j in range(2, i):
            k = i % j 
            if k == 0: 
              bul = True
              j += 1                   
        if i not in arr:
            if bul == False: 
                arr.append(i)
                count += 1       
        i += 1
    print(arr)

if __name__ == "__main__":
    time_start = time.time()
    primeNum(n)
    time_end = time.time()
    print (time_end - time_start)
