

# windowed_max_range([1, 0, 2, 5, 4, 8], 2) == 4 # 4, 8
# windowed_max_range([1, 0, 2, 5, 4, 8], 3) == 5 # 0, 2, 5
# windowed_max_range([1, 0, 2, 5, 4, 8], 4) == 6 # 2, 5, 4, 8
# windowed_max_range([1, 3, 2, 5, 4, 8], 5) == 6 # 3, 2, 5, 4, 8
# Think about the time complexity of your method. How many iterations are required at each step? What is its overall time complexity in Big-O notation?
# # Analysis
# # It turns out that it is quite costly to calculate the min and max elements 
# of each window (each method is an O(n) operation). If we use the min AND max methods built into Ruby, 
# this costs us 2 * window_size iterations for each window (overall time complexity: O(n^2)).

# # What's more, in the naive solution, we consider each window as a slice of the input array. On the
#  first iteration, we slice the array from index 0 to index w. On the second iteration, we slice from
#   1 to w + 1, and so forth. However, slicing an array is rather costly (again, O(n)). Remember, a new array is created when slicing an existing array.


# # What if it were possible to calculate min and max instantaneously (in constant time) per window? 
# This would allow us to find the max windowed range in O(n) time. We can achieve this by writing a custom data structure dedicated to solving this specific problem.

# # Optimized Solution:
# # We will be creating a sequence of data structures that will culminate in a MinMaxStackQueue, our custom data structure that will keep track of the min and max in constant time. 
# We will get to the specifics of how it does this in a second.

# # We will be building the following in order:

# # MyQueue
# # MyStack
# # StackQueue
# # MinMaxStack
# # MinMaxStackQueue
# # Phase 2: MyQueue
# # Since the window only moves one index at a time, it would be nicer to represent it as a queue. Every time we move the window, we could enqueue the next element and 
# dequeue the last element. This would allow us to avoid using Array#slice, so that we can traverse the array in constant time.

# # A queue is a simple abstract linear data structure where elements are stored in order and can be added or removed one at a time. A queue follows first in, first out
#  (FIFO). Unlike Ruby's Array data structure, most Queue implementations do not expose methods to slice or sort the data, or to find a specific element.
#      The basic operations are:

# # Queue
# # enqueue: adds an element to the back of the queue
# # dequeue: removes an element from the front of the queue and returns it
# # We will also write a peek method, which returns the "top" or "next" item without actually removing it.

# # Queues may be implemented in terms of simpler data structures, such as linked lists, but in Ruby you can actually use an Array as the underlying data store,
#  as long as you don't expose it publicly (i.e., don't define an attr_reader for it). We'll do this in today's exercises.

# # Implement a Queue class. Use the following initialize method as a starting point:

class MyQueue
    attr_reader :store
  def initialize                
  
    @store = []
  end

  def peek
    @store.first
  end
  
  def enqueue(el)
    @store.push(el)
  end

  def dequeue
    @store.shift
  end

  def size
    @store.length
  end

  def empty?
    size == 0
  end

  
end


class MyStack
  attr_reader :store
    def initialize
      @store = []
    end
  
    def peek
      @store[-1]
    end
  
    #pushing value
    def push(el)
      @store.push(el)
    end
    def pop
      #if store is empty, then both other arrays should also be empty
      if @store.empty?
        return nil
      end
      @store.pop
    end
  
    def size
      @store.length
    end
  
    def empty?
      size == 0
    end
  
end

class MinMaxStackQueue
  attr_reader :stack1,:stack2,:max,:min
    def initialize
        @stack1 = MyStack.new
        @stack2 = MyStack.new
        @max = MyQueue.new
        @min = MyQueue.new
    end

    def peek
        if !@stack2.empty?
          return @stack2[-1]
        else
          if !@stack1.empty?
            return @stack1.first
          end
        end
        return nil
    end
    def max
        # if self.empty?
        #   return nil
        # end
#CHANGE THIS BACK AFTER TESTING 
        # return @max.last
        return @max.store
    end

    def min
        # if self.empty?
        #   return nil
        # end
#CHANGE THIS BACK AFTER TESTING 

        # return @min.last
        return @min.store
    end

    def enqueue(el)
        # @store.push(el)
        @stack1.push(el)
        if @max.empty? && @min.empty?
          @max.enqueue(el)
          @min.enqueue(el)
        else
      #if last element in max array is smaller than pushed value, push value into max array (this will be new max until its popped out)
          if @max.peek <= el
            @max.enqueue(el)
          end
      #if last element in min array is bigger than pushed value, push value into min array (this will be new min until its popped out)
          if @min.peek >= el
            @min.enqueue(el)
          end
        end
    end

    def dequeue
        # @store.shift
        if @stack2.empty?
           helper()
        end
        popped_value = @stack2.pop

        if popped_value == @max.peek
          @max.dequeue
          if !@max.peek.nil?
            @maximum_value = @max.peek
          end
          #if pop is == min, then pop out of min and change new min
        elsif popped_value == @min.peek
          @min.dequeue
          if !@min.peek.nil?
            @minumum_value = @min.peek
          end
        else
          #if value isnt min or max, just pop out of main stack
          return popped_value
        end
    end

    def size
      @stack1.size + @stack2.size
        # @store.length
    end

    def empty?
        @stack1.size + @stack2.size == 0
    end

    private
    def helper
        @stack2.push(@stack1.pop) until @stack1.empty?
    end

end
# class MinMaxStackQueue

#     def initialize
#         @stack1 = MyStack.new
#         @stack2 = MyStack.new
#     end

#     def peek
#         # @store[0]
#     end
#     def max
#         return @stack2.max if @stack1.max == nil
#         return @stack1.max if @stack2.max == nil
#         return @stack1.max if @stack1.max > @stack2.max
#         @stack2.max
#     end

#     def min
#         return @stack2.min if @stack1.min == nil
#         return @stack1.min if @stack2.min == nil
#         return @stack1.min if @stack1.min < @stack2.min
#         @stack2.min
#     end

#     def enqueue(el)
#         # @store.push(el)
#         @stack1.push(el)
#     end

#     def dequeue
#         # @store.shift
#         if @stack2.empty?
#            helper()
#         end
#         @stack2.pop
#     end

#     def size
#         @stack1.size + @stack2.size
#         # @store.length
#     end

#     def empty?
#         @stack1.size + @stack2.size == 0
#     end

#     private
#     def helper
#         @stack2.push(@stack1.pop) until @stack1.empty?
#     end

# end

# class MinMaxStack
#     def initialize
#         @store = MyStack.new
#     end
    
#     def peek
#         @store.peek unless empty?
#     end
    
#     def size
#         @store.size
#     end
    
#     def empty?
#         @store.empty?
#     end
      
   
#     def pop
#         @store.pop
#     end

#     def push
#         @store.push
#     end
# end        
def windowed_max_range(array, window_size)
    queue = MinMaxStackQueue.new
    best_range = nil
  
    array.each_with_index do |el, i|
      p "-----------"
      p "ENQUEUE #{el}"
      p "stack1: #{queue.stack1.store}"
      p "stack2: #{queue.stack2.store}"
      p "max_arr: #{queue.max}"
      p "min_arr: #{queue.min}"
      p "max: #{queue.max.last}"
      p "min: #{queue.min.last}"
      queue.enqueue(el)
      queue.dequeue if queue.size > window_size
      # temp = queue.min
      # p "#{temp} temp"
      # p "#{queue.min} min"
      if queue.size == window_size
        # temp = 0 if queue.min == nil 
        # current_range = queue.max - temp
        current_range = queue.max.last - queue.min.last
        best_range = current_range if !best_range || current_range > best_range
        
      end
    end
    p "-----------"
      # p "ENQUEUE #{el}"
      p "stack1: #{queue.stack1.store}"
      p "stack2: #{queue.stack2.store}"
      p "max_arr: #{queue.max}"
      p "min_arr: #{queue.min}"
      p "max: #{queue.max.last}"
      p "min: #{queue.min.last}"
  
    best_range
end
  

p windowed_max_range([1, 0, 2, 5, 4, 8], 2) #== 4 # 4, 8
# p windowed_max_range([1, 0, 2, 5, 4, 8], 3) #== 5 # 0, 2, 5
# p windowed_max_range([1, 0, 2, 5, 4, 8], 4) #== 6 # 2, 5, 4, 8
# p windowed_max_range([1, 3, 2, 5, 4, 8], 5) #== 6 # 3, 2, 5, 4, 
# # Phase 5: MinMaxStack
# # Before we move on, let's take a step back to our MyStack class. We'll modify it so that we always know the maximum value in the stack. 
# We could write a max method that calls @store.max. However, this requires us to iterate over every item in the @store array, which gives us a 
# time complexity of O(n). This isn't good enough for us; we want to be able to return the max in constant time (O(1)). If we can't iterate over @store, 
# how else could we modify the stack to get this functionality?

# Once you have max implemented, it should be easy to add a min method.

# Hint: We could store some metadata with the value of each element.
#  In other words, we can be storing more information than just the value with new element to the store.
#   Think about how to do this and what information to store.

# # Implement peek, size, empty?, max, min, pop, push methods on your MinMaxStack.

# # Phase 6: MinMaxStackQueue
# # Similar to MyStack (phase 3) was used to build StackQueue (phase 4), use your MinMaxStack (phase 5) to build a MinMaxStackQueue.

# # What methods are needed to solve this problem in O(n) time?

# # Phase 7: 
# # Armed with a working MinMaxStackQueue, this problem should be much easier. You'll want to follow the same basic approach as above,
#  but use our new data structure instead of array slices. As before, return the current_max_range at the end of the method. Make sure all 
#  the test cases pass, and that you both understand the time complexity of this solution.

# Code Review: Request for a TA Code review at the end of this phase.

# def max
#     @store.peek[:max] unless empty?
#   end

#         def min
#           @store.peek[:min] unless empty?
#         end

#         def pop
#           @store.pop[:value] unless empty?
#         end

#         def push(val)
#           # By using a little extra memory, we can get the max simply by peeking,
#           # which is O(1).
#           @store.push({
#             max: new_max(val),
#             min: new_min(val),
#             value: val
#           })
#         end

#         private

#         def new_max(val)
#           empty? ? val : [max, val].max
#         end

#         def new_min(val)
#           empty? ? val : [min, val].min
#         end
#       end






