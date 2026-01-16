import { redirect } from 'next/navigation';

export default async function LegacyChallengePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  redirect(`/learn/${id}`);
}
