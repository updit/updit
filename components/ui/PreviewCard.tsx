interface PreviewCardProps {
  label: string;
  isJp?: boolean;
  imageSrc?: string;
}

export default function PreviewCard({ label, isJp = false, imageSrc }: PreviewCardProps) {
  return (
    <div className="w-[220px]">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={label}
          style={{ width: '100%', height: '90px', objectFit: 'cover', borderRadius: '4px' }}
        />
      ) : (
        <div
          className="w-full h-24 bg-gray-100 rounded"
          style={{ borderBottom: `2px solid ${isJp ? '#c0623f' : '#2b2bff'}` }}
        />
      )}
    </div>
  );
}
