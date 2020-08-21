#BFS 

# 		A
# 	B		C
# D E  F G

# => A B C D E F G

#queue = []

#queue.is not empty
# shift, check for value, then push children to queue


def bfs(target)
	#queue = Queue.new
  queue = []
  queue.push(self)
  
  while !queue.empty?
  	current = queue.shift
    if current.value == target
    	return current
    end
    
    current.children.each do |child|
    	queue.push(child)
    end
    
  end
  
	return false/nil
end

# 		A
# 	B		C
# D E  F G

# target = C
# queue: [D, E]

# while loop---
# current: C 