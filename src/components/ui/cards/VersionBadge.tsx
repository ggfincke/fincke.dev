'use client';

import { useState, useEffect } from 'react';

// interface for GitHub release data
interface GitHubRelease {
  tag_name: string;
  published_at: string;
}

// version badge component
interface VersionBadgeProps {
  repoUrl: string;
}

export function VersionBadge({ repoUrl }: VersionBadgeProps) {
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        // Extract owner/repo from GitHub URL
        const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) return;
        
        const [, owner, repo] = match;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
        
        const response = await fetch(apiUrl);
        if (response.ok) {
          const release: GitHubRelease = await response.json();
          setVersion(release.tag_name);
        } else if (response.status === 404) {
          // No releases found - this is expected for many projects
          setVersion(null);
        }
      } catch (error) {
        console.log('Could not fetch version:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchLatestVersion();
  }, [repoUrl]);

  if (loading || !version) {
    return null;
  }

  return (
    <span className="font-semibold text-base text-[var(--color-primary)] not-italic">{version} • </span>
  );
}