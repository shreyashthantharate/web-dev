"use client";

import { useState } from "react";
import { Trash2, Plus } from "lucide-react";

type Todo = {
  id: string;
  title: string;
  completed?: boolean;
  createdAt?: Date;
};

export default function TodoList({ initialTodos }: { initialTodos: Todo[] }) {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const addTodo = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTodoTitle.trim()) return;

    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newTodoTitle }),
      });

      if (!response.ok) {
        throw new Error("Failed to create todo");
      }

      const result = await response.json();

      if (result.success) {
        setTodos([...todos, result.data]);
        setNewTodoTitle("");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  };

  const deleteTodo = async (id: string) => {
    try {
      setTodos(todos.filter((todo) => todo.id !== id));
      // You can add a DELETE route if needed for persistence
    } catch (err) {
      console.error("Failed to delete todo:", err);
    }
  };

  return (
    <div className="space-y-6">
      {/* Add Todo Form */}
      <form onSubmit={addTodo} className="space-y-3">
        <div className="flex gap-2">
          <input
            type="text"
            value={newTodoTitle}
            onChange={(e) => setNewTodoTitle(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-50 placeholder-zinc-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-500/50 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition flex items-center gap-2"
          >
            <Plus size={20} />
            Add
          </button>
        </div>
        {error && <p className="text-red-400 text-sm">{error}</p>}
      </form>

      {/* Todo List */}
      <div className="space-y-2">
        {todos.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-zinc-500 text-lg">No tasks yet. Create one to get started!</p>
          </div>
        ) : (
          <div className="space-y-2">
            {todos.map((todo) => (
              <div
                key={todo.id}
                className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-lg hover:border-orange-500/50 transition group"
              >
                <div className="flex-1">
                  <p className="text-zinc-50 font-medium">{todo.title}</p>
                  {todo.createdAt && (
                    <p className="text-zinc-500 text-sm">
                      {new Date(todo.createdAt).toLocaleDateString()}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="p-2 text-zinc-500 hover:text-orange-500 hover:bg-zinc-800 rounded-lg transition opacity-0 group-hover:opacity-100"
                  title="Delete task"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-4 pt-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <p className="text-zinc-500 text-sm mb-1">Total Tasks</p>
          <p className="text-2xl font-bold text-orange-500">{todos.length}</p>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-lg p-4">
          <p className="text-zinc-500 text-sm mb-1">Completed</p>
          <p className="text-2xl font-bold text-zinc-400">0</p>
        </div>
      </div>
    </div>
  );
}
