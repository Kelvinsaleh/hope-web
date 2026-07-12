interface Row {
  feature: string;
  hope: string;
  competitor: string;
}

export function ComparisonTable({
  competitorName,
  rows,
}: {
  competitorName: string;
  rows: Row[];
}) {
  return (
    <div className="overflow-hidden rounded-xl2 border border-ink-100 dark:border-ink-800">
      <table className="w-full text-left text-sm">
        <thead className="bg-bloom-50 dark:bg-ink-800">
          <tr>
            <th className="px-4 py-3 font-semibold text-ink-900 dark:text-white">Feature</th>
            <th className="px-4 py-3 font-semibold text-bloom-700 dark:text-bloom-300">Hope</th>
            <th className="px-4 py-3 font-semibold text-ink-900 dark:text-white">{competitorName}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-t border-ink-100 dark:border-ink-800">
              <td className="px-4 py-3 font-medium text-ink-800 dark:text-ink-100">{row.feature}</td>
              <td className="px-4 py-3 text-ink-600 dark:text-ink-100/80">{row.hope}</td>
              <td className="px-4 py-3 text-ink-600 dark:text-ink-100/80">{row.competitor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
