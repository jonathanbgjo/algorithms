require "byebug"
#NAUSEATING NUMBERS.RB
#strange sums

def strange_sums(arr)
    count = 0
    arr.each_with_index do |num_1, i|
        arr.each_with_index do |num_2, j|
            if j > i && num_1 + num_2 == 0
                count += 1
            end
        end
    end

    count
end

# p strange_sums([2, -3, 3, 4, -2])     # 2
#  p strange_sums([42, 3, -1, -42])      # 1
#  p strange_sums([-5, 5])               # 1
#  p strange_sums([19, 6, -3, -20])      # 0
#  p strange_sums([9])                   # 0


#pair_product
def pair_product(arr, num)
    # debugger
    (0..arr.length-2).each do |i|
        (i+1..arr.length-1).each do |el|
            return true if arr[i] * arr[el] == num
        end
    end
    return false
end

#  p pair_product([4, 2, 5, 8], 16)    # true
#  p pair_product([8, 1, 9, 3], 8)     # true
#  p pair_product([3, 4], 12)          # true
#  p pair_product([3, 4, 6, 2, 5], 12) # true
# p pair_product([4, 2, 5, 7], 16)    # false
# p pair_product([8, 4, 9, 3], 8)     # false
# p pair_product([3], 12)             # false

#rampant_repeats

def rampant_repeats(string, hash)
    new_str = ""

    string.each_char do |char|
        if hash[char] 
            hash[char].times { new_str += char }
        else
            new_str += char
        end
    end

    new_str
end

# p rampant_repeats('taco', {'a'=>3, 'c'=>2})             # 'taaacco'
# p rampant_repeats('feverish', {'e'=>2, 'f'=>4, 's'=>3}) # 'ffffeeveerisssh'
# p rampant_repeats('misispi', {'s'=>2, 'p'=>2})          # 'mississppi'
# p rampant_repeats('faarm', {'e'=>3, 'a'=>2})            # 'faaaarm'

#perfect_square

def perfect_square(num)
    if num ** 0.5 % 1 == 0
        return true
    else
        return false
    end
end


# p perfect_square(1)     # true
# p perfect_square(4)     # true
# p perfect_square(64)    # true
# p perfect_square(100)   # true
# p perfect_square(169)   # true
# p perfect_square(2)     # false
# p perfect_square(40)    # false
# p perfect_square(32)    # false
# p perfect_square(50)    # false

#anti_prime
def anti_prime?(num)
    return true if find_greatest_divisors(num)[0] == num

    return false

end

def find_greatest_divisors(num)
    #max_num[0] = num and then max_num[1] = # of divisors
    # before we just had the # of divisors vs the number we were comparing
    max_num = [0,0];
    new_arr = []
    (1..num).each do |i|
        new_arr = []
        (1..i).each do |k|
            if i%k == 0
                new_arr << k
            end
        end
        if new_arr.length > max_num[1]
            max_num = [i, new_arr.length];
            #p max_num
        end
    end

    return max_num
end

#compare lengths of array of divisors for each number until target

# p anti_prime?(24)   # true
# p anti_prime?(36)   # true
# p anti_prime?(48)   # true
# p anti_prime?(360)  # true
# p anti_prime?(1260) # true
# p anti_prime?(27)   # false
# p anti_prime?(5)    # false
# p anti_prime?(100)  # false
# p anti_prime?(136)  # false
# p anti_prime?(1024) # false


# def matrix_addition(matrix_1, matrix_2)
#     new_matrix = Array.new(matrix_1.length) { Array.new(matrix_1[0].length) }
#     (0...matrix_1.length).each do |i|
#         (0...2).each do |k|
#             #  debugger
#             sum = matrix_1[i][k] + matrix_2[i][k]
#             new_matrix[i][k] = sum
                #new_matrix[i][k] = matrix_1[i][k] + matrix_2[i][k]
#         end
#     end
            
#     new_matrix 
# end

def matrix_addition(matrix_1, matrix_2)
    height = matrix_1.length
    width = matrix_1.min.length
    result = Array.new(height) { Array.new(width, 0) }
    # result = matrix_1
    (0...height).each do |row|
        (0...width).each do |col|
            result[row][col] = matrix_1[row][col] + matrix_2[row][col]
        end
    end

    result
end

#(0,0),(0,1) (1,0) (1,1)
matrix_a = [[2,5], [4,7]]
matrix_b = [[9,1], [3,0]]

matrix_c = [[-1,0], [0,-1]]
matrix_d = [[2, -5], [7, 10], [0, 1]]
matrix_e = [[0 , 0], [12, 4], [6,  3]]
#p matrix_e[0][2]
p matrix_addition(matrix_a, matrix_b) # [[11, 6], [7, 7]]
p matrix_addition(matrix_a, matrix_c) # [[1, 5], [4, 6]]
p matrix_addition(matrix_b, matrix_c) # [[8, 1], [3, -1]]
p matrix_addition(matrix_d, matrix_e) # [[2, -5], [19, 14], [6, 4]]

def mutual_factors(*num)
    count = find_divisors(num)
    new_arr = []

    count.each do |k, v|
        if count[k] == num.length
            new_arr << k
        end
    end
    # p count
    new_arr
end

def find_divisors(array)
    count = Hash.new(0)
    array.each do |num|
        (1..num).each do |divisor|
            if num % divisor == 0
                count[divisor] += 1
            end
        end
    end

    count
end

# p mutual_factors(50, 30)            # [1, 2, 5, 10]
# p mutual_factors(50, 30, 45, 105)   # [1, 5]
# p mutual_factors(8, 4)              # [1, 2, 4]
# p mutual_factors(8, 4, 10)          # [1, 2]
# p mutual_factors(12, 24)            # [1, 2, 3, 4, 6, 12]
# p mutual_factors(12, 24, 64)        # [1, 2, 4]
# p mutual_factors(22, 44)            # [1, 2, 11, 22]
# p mutual_factors(22, 44, 11)        # [1, 11]
# p mutual_factors(7)                 # [1, 7]
# p mutual_factors(7, 9)              # [1]


# def tribonacci_number(num)
#     if num == 1
#         return 1
#     elsif num == 2
#         return 1
#     elsif num == 3
#         return 2
#     end

#     i = 4
#     while i 


# end
def tribonacci_number(num)
    if num <= 0 
        return 0
    elsif num == 1
        return 1
    elsif num == 2
        return 1
    end
    return  tribonacci_number(num-1) + tribonacci_number(num-2) + tribonacci_number(num-3)

end

# p tribonacci_number(1)  # 1
# p tribonacci_number(2)  # 1
# p tribonacci_number(3)  # 2
# p tribonacci_number(4)  # 4
# p tribonacci_number(5)  # 7
# p tribonacci_number(6)  # 13
# p tribonacci_number(7)  # 24
# p tribonacci_number(11) # 274

# matrix_addition_reloaded

# squarocol?

# squaragonal?

# pascals_triangle

#mersenne_prime

def mersenne_prime(n)
    i = 1
    count = 0
    while count != n
        runner = 2 ** i
        ## 
        if prime?(runner-1)
            count +=1 
        end
        i+=1
    end

    return runner-1
end

def prime?(n)
    if n < 2
        return false
    end
    (2...n).none? { |i| n % i == 0 }
end

# p mersenne_prime(1) # 3
# p mersenne_prime(2) # 7
# p mersenne_prime(3) # 31
# p mersenne_prime(4) # 127
# p mersenne_prime(6) # 131071

# cat = 24
# (i * (i+1)) / 2 = 24
# i ** 2 + i = 48

def word_sum(word)
    sum = 0
    alphabet_hash= {
    "a" => 1, 
    "b" => 2, 
    "c" => 3,
    "d" => 4, 
    "e" => 5, 
    "f" => 6, 
    "g" => 7, 
    "h" => 8, 
    "i" => 9, 
    "j" => 10, 
    "k" => 11, 
    "l" => 12, 
    "m" => 13, 
    "n" => 14, 
    "o" => 15, 
    "p" => 16, 
    "q" => 17, 
    "r" => 18, 
    "s" => 19, 
    "t" => 20, 
    "u" =>21, 
    "v" => 22, 
    "w" => 23, 
    "x" => 24, 
    "y" =>25, 
    "z" =>26
    }
    word.each_char do |char|
        sum += alphabet_hash[char]
    end

    sum
end

def triangular_word?(word)
    num = word_sum(word)

    (0..num).each do |i|
        if (i*(i+1))/2 == num
            # p i
            return true
        elsif (i*(i+1))/2 > num
            return false
        end   
    end 
    return false
end

# p triangular_word?('abc')       # true
# p triangular_word?('ba')        # true
# p triangular_word?('lovely')    # true
# p triangular_word?('question')  # true
# p triangular_word?('aa')        # false
# p triangular_word?('cd')        # false
#  p triangular_word?('cat')       # false
# p triangular_word?('sink')      # false

def consecutive_collapse(arr)
    collapsable = true

    while collapsable
        collapsable = false

        (0...arr.length - 1).each do |idx|
            # debugger
            if arr[idx] == (arr[idx + 1] + 1) || arr[idx] == (arr[idx + 1] - 1)
                arr.slice!(idx, 2)
                collapsable = true 
                break
            end
        end
    end
    arr
end

# p consecutive_collapse([3, 4, 1])                     # [1]
# p consecutive_collapse([1, 4, 3, 7])                  # [1, 7]
# p consecutive_collapse([9, 8, 2])                     # [2]
# p consecutive_collapse([9, 8, 4, 5, 6])               # [6]
# p consecutive_collapse([1, 9, 8, 6, 4, 5, 7, 9, 2])   # [1, 9, 2]
# p consecutive_collapse([3, 5, 6, 2, 1])               # [1]
# p consecutive_collapse([5, 7, 9, 9])                  # [5, 7, 9, 9]
# p consecutive_collapse([13, 11, 12, 12])              # []

#pretentious_primes

def pretentious_primes(arr, num)
    count = 0
    new_arr = []
    # debugger
    arr.each do |el|
        count = 0;
        #so i think we go until we find where count == num  (as the base case)
        #and reset to go onto the next index in the array #i think go ahead and try running it?

        if num > 0
            temp = el +1
            while(count != num)
                if prime?(temp)
                    count += 1
                    if(count == num)
                        new_arr << temp
                    end
                end
                temp+=1
            end
        else #num < 0
            temp = el -1
            while(count != num)
                if temp < 1 
                    new_arr << nil
                    break
                end
                if prime?(temp)
                    count -= 1
                    if(count == num)
                        new_arr << temp
                    end
                end
                temp-=1
            end
        end
    end

    new_arr
end

# p pretentious_primes([4, 15, 7], 1)           # [5, 17, 11]
# p pretentious_primes([4, 15, 7], 2)           # [7, 19, 13]
# p pretentious_primes([12, 11, 14, 15, 7], 1)  # [13, 13, 17, 17, 11]
# p pretentious_primes([12, 11, 14, 15, 7], 3)  # [19, 19, 23, 23, 17]
# p pretentious_primes([4, 15, 7], -1)          # [3, 13, 5]
# p pretentious_primes([4, 15, 7], -2)          # [2, 11, 3]
# p pretentious_primes([2, 11, 21], -1)         # [nil, 7, 19]
# p pretentious_primes([32, 5, 11], -3)         # [23, nil, 3]
# p pretentious_primes([32, 5, 11], -4)         # [19, nil, 2]
# p pretentious_primes([32, 5, 11], -5)         # [17, nil, nil]