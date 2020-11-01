from random import randint

size = 50

mylist = []

for i in range(size):
    mylist.append(randint(0, 20))
ascending_list = sorted(mylist)
descending_list = ascending_list[::-1]

print(f'{ascending_list}\n{descending_list}')
