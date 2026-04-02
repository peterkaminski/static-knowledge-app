import type { SourceEntry } from "../types/content";

interface Props {
  sources: SourceEntry[];
}

export function SourcesView({ sources }: Props) {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-900 mb-2">
        Sources &amp; Bibliography
      </h1>
      <p className="text-slate-500 mb-6">
        The works that inform this module. All claims are grounded in these
        vetted sources.
      </p>
      <div className="space-y-4">
        {sources.map((source) => (
          <div
            key={source.id}
            className="border border-slate-200 rounded-lg p-4"
          >
            <h3 className="font-semibold text-slate-900">
              {source.title}{" "}
              <span className="font-normal text-slate-400">
                ({source.year})
              </span>
            </h3>
            <p className="text-sm text-slate-600 mb-1">{source.author}</p>
            <p className="text-sm text-slate-500">{source.description}</p>
            {source.url && (
              <a
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-indigo-600 hover:text-indigo-800 mt-1 inline-block"
              >
                View source &rarr;
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
