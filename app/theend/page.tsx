import { redirect } from 'next/navigation';

export default function LegacyEndPage() {
  redirect('/complete');
}
