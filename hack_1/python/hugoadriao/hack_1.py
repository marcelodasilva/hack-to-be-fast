from random import randint

n = 10
random_list = [randint(0, 20) for i in range(n)]
ascending_list = sorted(random_list)
descending_list = ascending_list[::-1]

print(f'{ascending_list}\n{descending_list}')