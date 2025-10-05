// app/app/loading.tsx - Next.js native loading
export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900">
        loading ...
      </div>
    </div>
  );
}
