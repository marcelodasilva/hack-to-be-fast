def sqrt_function(sqrt_of):
    result = []
    prime_number = 2
    while sqrt_of != 1:
        if sqrt_of%prime_number == 0:
            sqrt_of = sqrt_of/prime_number
            result.append(prime_number)
        else:
            prime_number += 1
            while True:
                if prime_number%prime_number != 0 and prime_number%1 != 0:
                    prime_number += 1
                else:
                    break
    
    value = 1
    i = 0
    while i < len(result)-1:
        if result[i] == result[i+1]:
            value *= result[i]
            i += 2
        else:
            i += 1
    
    return value

print(sqrt_function(100))