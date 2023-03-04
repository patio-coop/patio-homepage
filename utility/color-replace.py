import sys
import re

# Define the original color values and their corresponding custom property names
color_map = {
    'rgba(110, 36, 176, 1)': '--deep-purple',
    'rgba(12, 19, 84, 1)': '--dark-midnight-blue',
    '#14aded': '--vibrant-blue',
    'rgba(50, 50, 93, 0.25)': '--translucent-blue-gray',
    'rgba(161, 165, 203, 0.3)': '--translucent-lavender-gray',
    'rgba(12, 19, 84, 0.7)': '--semi-translucent-midnight-blue',
    '#08f5da': '--turquoise-blue',
    'rgba(8, 245, 218, 1)': '--turquoise-blue',
    'rgba(20, 173, 237, 1)': '--deep-sky-blue',
    '#9a49ec': '--dark-violet',
    '#6e24b0': '--deep-purple-dark',
    'rgba(154, 73, 236, 1)': '--light-purple',
    '#330033': '--dark-purple-red',
}

def color_replace(css_code):
    """
    Replaces original color values in CSS code with custom property names.
    """
    for original_value, new_name in color_map.items():
        css_code = re.sub(re.escape(original_value), f'var({new_name})', css_code)
    return css_code

def main():
    # Read the CSS code from standard input
    css_code = sys.stdin.read()

    # Replace the original color values with the custom property names
    updated_css_code = color_replace(css_code)

    # Output the updated CSS code to standard output
    sys.stdout.write(updated_css_code)

if __name__ == '__main__':
    main()
