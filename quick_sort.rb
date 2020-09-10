class Array
    

    def quicksort(&prc)

        return self if length<2

        prc ||= Proc.new{ |a,b| a <=> b }
        pivot = self.first

        left = drop(1).select { |el| prc.call(el,pivot) == -1}
        right = drop(1).select { |el| prc.call(el,pivot) != -1}

        left_sorted = left.quicksort(&prc)
        right_sorted = right.quicksort(&prc)

        left_sorted + [pivot] + right_sorted
    end

end

p [3,6,2,9,0].quicksort