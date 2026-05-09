import { Tag, Calendar, BookOpen } from 'lucide-react';

export default function EvidenceGrid({ items }) {
  if (items.length === 0) {
    return (
      <div className="bg-white border border-slate-200 rounded-3xl border-2 border-dashed border-slate-100 p-12 text-center">
        <div className="w-16 h-16 bg-slate-50 text-slate-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <BookOpen size={32} />
        </div>
        <h3 className="text-xl font-bold mb-2">No portfolio items yet</h3>
        <p className="text-slate-500 max-w-md mx-auto">
          Start uploading evidence of student work to build their professional learning portfolios.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(item => (
        <div key={item.id} className="bg-white border border-slate-100 shadow-sm overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
          <div className="h-48 relative overflow-hidden bg-white border border-slate-50">
            {item.imageUrl ? (
              <img 
                src={item.imageUrl} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-gray-400 dark:text-gray-500">
                <BookOpen size={48} />
              </div>
            )}
            <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-semibold px-3 py-1 rounded-full">
              {item.type}
            </div>
          </div>
          
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 line-clamp-2">{item.title}</h3>
            
            <div className="flex flex-col gap-2 mb-4 text-sm text-slate-500">
              <span className="flex items-center gap-2">
                <BookOpen size={14} />
                {item.course}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} />
                {item.date}
              </span>
            </div>
            
            <p className="text-slate-600 text-sm line-clamp-3 mb-6">
              {item.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {item.tags.map(tag => (
                <span key={tag} className="flex items-center gap-1 bg-indigo-50 text-indigo-700 px-3 py-1 text-xs rounded-full font-medium">
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
