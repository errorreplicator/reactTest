
def f3(n):
    jako_napis=str(n)
    przypis=''
    d=len(jako_napis)
    for x in range(d-1,-1,-2):
        przypis=jako_napis[x]+przypis
    powstala_liczba=int(przypis)
    print('Z liczby',n,' powstanie liczba',powstala_liczba)


f3(2223)


# 0
# 1
# 2
# 3
# 4
# 5
# 6
# 10
# 11
# 12
# 13