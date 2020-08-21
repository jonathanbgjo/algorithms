require "byebug"

# def duos(str)
#     my_hash = Hash.new(0)

#     str.each_char do |char|
#         my_hash[char] += 1
#     end

#     my_hash
# end

def duos(str)
    count = 0
    prev = str[0]
    i=1
    while ( i < str.length)
        #debugger
        if str[i] == prev
            count+=1
        else
            prev = str[i]
        end

        i+=1
    end
    count
end

# p duos('bootcamp')      # 1
# p duos('wxxyzz')        # 2
# p duos('hoooraay')      # 3
# p duos('dinosaurs')     # 0
# p duos('e')             # 0

def sentence_swap(str, hash)
    result = ""
    arr =str.split 
    arr.each do |word| 
        if hash[word]
            result += " " + hash[word]
        else
            result += " " + word
        end
    end

    result
end

# p sentence_swap('anything you can do I can do',
#     'anything'=>'nothing', 'do'=>'drink', 'can'=>'shall'
# ) # 'nothing you shall drink I shall drink'

# p sentence_swap('what a sad ad',
#     'cat'=>'dog', 'sad'=>'happy', 'what'=>'make'
# ) # 'make a happy ad'

# p sentence_swap('keep coding okay',
#     'coding'=>'running', 'kay'=>'pen'
# ) # 'keep running okay'

def hash_mapped(hash, prc, &block)
    my_hash = Hash.new()
    hash.each do |k,v|
        my_hash[block.call(k)] = prc.call(hash[k])
    end
    my_hash
end

# double = Proc.new { |n| n * 2 }
# p hash_mapped({'a'=>4, 'x'=>7, 'c'=>-3}, double) { |k| k.upcase + '!!' }
# # {"A!!"=>8, "X!!"=>14, "C!!"=>-6}

# first = Proc.new { |a| a[0] }
# p hash_mapped({-5=>['q', 'r', 's'], 6=>['w', 'x']}, first) { |n| n * n }
# # {25=>"q", 36=>"w"}

def counted_characters(str) 
    new_arr = []
    my_hash = Hash.new(0)
    str.each_char do |char|
        if my_hash[char] == 0
            new_arr.push(char)
        end
        my_hash[char] +=1
    end
    my_hash.each do |k,v|
        if my_hash[k] < 3
            new_arr.delete(k)
        end
    end

    return new_arr
end

# p counted_characters("that's alright folks") # ["t"]
# p counted_characters("mississippi") # ["i", "s"]
# p counted_characters("hot potato soup please") # ["o", "t", " ", "p"]
# p counted_characters("runtime") # []


def triplet_true(str)
    count = 0;
    same = str[0]
    #debugger
    str.each_char do |char|
        if(same == char)
            count+=1
            if(count == 3)
                return true
            end
        else
            count = 1
            same = char
        end
    end
    return false
        
end
# p triplet_true('caaabb')        # true
# p triplet_true('terrrrrible')   # true
# p triplet_true('runninggg')     # true
# p triplet_true('bootcamp')      # false
# p triplet_true('e')             # false

def energetic_encoding(str, hash)
    result = ""
    str.each_char do |char|
        if char == " "

        elsif hash[char] 
            result += hash[char]
        else
            result += "?"
        end
    end

    result

end

# p energetic_encoding('sent sea',
#     'e'=>'i', 's'=>'z', 'n'=>'m', 't'=>'p', 'a'=>'u'
# ) # 'zimp ziu'

# p energetic_encoding('cat',
#     'a'=>'o', 'c'=>'k'
# ) # 'ko?'

# p energetic_encoding('hello world',
#     'o'=>'i', 'l'=>'r', 'e'=>'a'
# ) # '?arri ?i?r?'

# p energetic_encoding('bike', {}) # '????'


def uncompress(str)
    result = ""
    str.each_char.with_index do |char, i|
        if(!char.match(/^[[:alpha:]]$/))
            (char.to_i).times{result+=str[i-1]}
        end
    end

    result
end
# p uncompress('a2b4c1') # 'aabbbbc'
# p uncompress('b1o2t1') # 'boot'
# p uncompress('x3y1x2z4') # 'xxxyxxzzzz'


#phase 2

def conjunct_select(arr, *prcs)
    new_arr = []
    flag = true
    arr.each do |ele|
        flag = true
        prcs.each do |prc|
            if !prc.call(ele)
                flag = false
            end
        end
        if flag
            new_arr << ele
        end
    end

    new_arr
end

# is_positive = Proc.new { |n| n > 0 }
# is_odd = Proc.new { |n| n.odd? }
# less_than_ten = Proc.new { |n| n < 10 }

# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive) # [4, 8, 11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd) # [11, 7, 13]
# p conjunct_select([4, 8, -2, 11, 7, -3, 13], is_positive, is_odd, less_than_ten) # [7]

def convert_pig_latin(str)
    result = ""
    vowels = "AEIOUaeiou"
    arr = str.split
    p str
    arr.each do |word|
        if word.length < 3
            result += " " + word
        else
            if vowels.include?(word[0])
                result += " " + word + 'yay'
            else
                found = false
                word.each_char.with_index do |char, i|
                    if vowels.include?(char)
                        temp = word.slice(0,i-1)
                        result+= " " + word[i, word.length-i] + word.slice(0,i) + 'ay'
                        break
                    end
                end
            end
        end
    end

    result

end

# p convert_pig_latin('We like to eat bananas') # "We ikelay to eatyay ananasbay"
# p convert_pig_latin('I cannot find the trash') # "I annotcay indfay ethay ashtray"
# p convert_pig_latin('What an interesting problem') # "Atwhay an interestingyay oblempray"
# p convert_pig_latin('Her family flew to France') # "Erhay amilyfay ewflay to Ancefray"
# p convert_pig_latin('Our family flew to France') # "Ouryay amilyfay ewflay to Ancefray"

def reverberate(str)
    result = ""
    arr = str.split
    vowels = "AEIOUaeiou"
    arr.each do |word|
        if word.length < 3
            result += " " + word
        else
            if vowels.include?(word[word.length-1])
                result += " " 
                2.times{ result+=  word}
            else
                word.reverse.each_char.with_index do |char, i|
                if vowels.include?(char)
                    #word.slice!(word.length-i-1,1)
                    result += " " + word + word[word.length-1-i,i+1]
                    break
                end
                end
            end

        end
    end

    result

end
# p reverberate('We like to go running fast') # "We likelike to go runninging fastast"
# p reverberate('He cannot find the trash') # "He cannotot findind thethe trashash"
# p reverberate('Pasta is my favorite dish') # "Pastapasta is my favoritefavorite dishish"
# p reverberate('Her family flew to France') # "Herer familyily flewew to Francefrance"

def disjunct_select(arr, *prcs)
    result = []
    arr.each do |ele|
        prcs.each do |prc|
            if prc.call(ele)
                result << ele
                break
            end
        end
    end

    result
end
# longer_four = Proc.new { |s| s.length > 4 }
# contains_o = Proc.new { |s| s.include?('o') }
# starts_a = Proc.new { |s| s[0] == 'a' }

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
# ) # ["apple", "teeming"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o
# ) # ["dog", "apple", "teeming", "boot"]

# p disjunct_select(['ace', 'dog', 'apple', 'teeming', 'boot', 'zip'],
#     longer_four,
#     contains_o,
#     starts_a
# ) # ["ace", "dog", "apple", "teeming", "boot"]

def alternating_vowel(str)
    p str
    vowels = "AEIOUaeiou"
    result = ""
    arr = str.split
    arr.each.with_index do |word, idx|
        if (1+idx).even?
            # #find last vowel and remove
            word.reverse.each_char.with_index do |char, i|
                if vowels.include?(char)
                    word.slice!(word.length-i-1,1)
                    result += " " + word
                    break
                end
            end
        else
            #find first vowel and remove
            found = false
            word.each_char.with_index do |char,i|
                if vowels.include?(char)
                    word.slice!(i,1)
                    result += " " +word
                    found = true
                    break
                end
            end
            if(!found)
                result+=" " + word
            end
        end
    end

    result
end

# p alternating_vowel('panthers are great animals') # "pnthers ar grat animls"
# p alternating_vowel('running panthers are epic') # "rnning panthrs re epc"
# p alternating_vowel('code properly please') # "cde proprly plase"
# p alternating_vowel('my forecast predicts rain today') # "my forecst prdicts ran tday"





def silly_talk(str)
    vowels = "AEIOUaeiou"
    result = ""
    arr = str.split
    arr.each do |word|
        if vowels.include?(word[word.length-1] )
            result += + word + word[word.length-1]
        else
            word.each_char do |char|
                if vowels.include?(char)
                    result+= char + 'b' + char
                else
                    result += char
                end
            end
        end
        result += " "
    end

    result
end
# p silly_talk('Kids like cats and dogs') # "Kibids likee cabats aband dobogs"
# p silly_talk('Stop that scooter') # "Stobop thabat scobooboteber"
# p silly_talk('They can code') # "Thebey caban codee"
# p silly_talk('He flew to Italy') # "Hee flebew too Ibitabaly"


def compress(str)
    result = ""
    prev = str[0]
    count = 0
    #debugger
    flag = false
    str.each_char do |char|
        if char == prev
            count+=1
        else
            if count <= 1
                result += prev
            else
                result += prev + count.to_s
            end
            prev = char
            count = 1
        end
    end
     if count <= 1
        result += prev
    else
        result += prev + count.to_s
    end

    result
end

# p compress('aabbbbc')   # "a2b4c"
# p compress('boot')      # "bo2t"
# p compress('xxxyxxzzzz')# "x3yx2z4"