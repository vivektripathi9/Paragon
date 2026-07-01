import PlaceholderPage, {
  createPlaceholderMetadata,
} from "@/components/PlaceholderPage";

export const metadata = createPlaceholderMetadata(
  "Resources",
  "Guides and resources for commercial defeasance and loan prepayment.",
);

export default function ResourcesPage() {
  return <PlaceholderPage title="Resources" />;
}
