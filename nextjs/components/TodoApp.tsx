import { prisma } from "@/lib/db";
import TodoList from "@/components/TodoList";

export default async function TodoApp() {
  const todos = await prisma.todo.findMany();

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-orange-500 mb-2">
            Task Manager
          </h1>
          <p className="text-zinc-400">Organize your tasks with ease</p>
        </div>

        <TodoList initialTodos={todos} />
      </div>
    </div>
  );
}
