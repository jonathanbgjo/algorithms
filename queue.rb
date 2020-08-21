class Queue
    def initialize
        @store = []
    end
    def enqueue(val)
        store << val
        self
    end
    def size
        store.length

    end

    private
    attr_reader :store


end


 queue = Queue.new

 p queue.enqueue(5)

 p queue.size