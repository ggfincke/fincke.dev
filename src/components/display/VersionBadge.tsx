// src/components/display/VersionBadge.tsx
// github release version badge w/ API integration

'use client';

import { useState, useEffect } from 'react';

import type { GitHubRelease } from '~/types/shared';
import type { VersionBadgeProps } from '~/types/ui';

// * version badge component w/ API fetching
export function VersionBadge({ repoUrl }: VersionBadgeProps) 
{
  const [version, setVersion] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => 
{
    // fetch latest release version from GitHub API
    const fetchLatestVersion = async () => 
{
      try 
{
        // Extract owner/repo from GitHub URL
        const match = repoUrl.match(/github\.com\/([^\/]+)\/([^\/]+)/);
        if (!match) return;
        
        const [, owner, repo] = match;
        const apiUrl = `https://api.github.com/repos/${owner}/${repo}/releases/latest`;
        
        const response = await fetch(apiUrl);
        if (response.ok) 
{
          const release: GitHubRelease = await response.json();
          setVersion(release.tag_name);
        }
 else if (response.status === 404) 
{
          // No releases found - this is expected for many projects
          setVersion(null);
        }
      }
 catch (error) 
{
        console.log('Could not fetch version:', error);
      }
 finally 
{
        setLoading(false);
      }
    };

    fetchLatestVersion();
  }, [repoUrl]);

  if (loading || !version) 
{
    return null;
  }

  return (
    <span className="font-semibold text-base text-[var(--color-primary)] not-italic">{version} • </span>
  );
}